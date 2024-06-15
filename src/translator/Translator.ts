import { makeAutoObservable, runInAction, flowResult, reaction } from 'mobx';
import { DictionaryType, LangType } from './types';
import { StatusType } from '../common/types';

export class Translator {
  status: StatusType = 'initial';

  dictionary: DictionaryType = undefined;

  dictionaryList = new Map<string, DictionaryType>();

  lang: LangType = 'en';

  notTranslateList: string[] = [];

  constructor() {
    makeAutoObservable(this);
    flowResult(this.onInitialTranslator());
    reaction(
      () => this.status,
      () => {
        const currentLang = navigator.language;
        if (this.status === 'ready' && currentLang.match('^(en)[-]?.*$')) {
          this.setDictionary('en');
        } else {
          this.setDictionary('ru');
        }
      }
    );
  }

  onInitialTranslator = async () => {
    try {
      this.status = 'loading';
      const enDictionary = await (await fetch('./en/dictionary.json')).json();
      runInAction(() => {
        this.dictionaryList.set('en', enDictionary);
        this.status = 'ready';
      });
    } catch (error) {
      console.error("didn't loading dictionary");
      this.status = 'error';
    }
  };

  setDictionary = (lang: LangType) => {
    this.lang = lang;
    this.dictionary = this.dictionaryList.get(lang);
  };

  tryTranslate = (message: string) => {
    if (!this.dictionary) {
      return message;
    }
    const result = this.dictionary[message];
    if (!result) {
      this.notTranslateList.push(message);
      console.log(this.notTranslateList);
      return message;
    }
    return result;
  };
}
