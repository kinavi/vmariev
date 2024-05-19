import { makeAutoObservable, runInAction, flowResult } from 'mobx';
import { DictionaryType, LangType } from './types';

export class Translator {
  dictionary: DictionaryType = undefined;

  dictionaryList = new Map<string, DictionaryType>();

  lang: LangType = 'en';

  notTranslateList: string[] = [];

  constructor() {
    makeAutoObservable(this);
    flowResult(this.onInitialTranslator());
  }

  onInitialTranslator = async () => {
    try {
      const enDictionary = await (await fetch('./en/dictionary.json')).json();
      runInAction(() => {
        this.lang = 'en';
        this.dictionaryList.set('en', enDictionary);
      });
    } catch (error) {
      console.error("didn't loading dictionary");
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
