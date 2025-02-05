import { makeAutoObservable } from 'mobx';
import { UserProgramApiDataType } from '../../../../api/ApiService/domains/Objorka/UserProgram/types';
import { getActivityIndex } from '../helpers/getActivityIndex';
import { translate } from '../../../../translator';

// https://primekraft.ru/articles/kak-rasschitat-sutochnuyu-kalorijnost-ratsiona-formulyi-rascheta/?srsltid=AfmBOoqV9n3mwg0fNbhcZxc8DNOCcZ3ug2qWRKs7UqIMDF83NWr25hyx
// https://clinic-cvetkov.ru/blog/kalkulyator-sutochnoy-normy-kaloriy/#:~:text=%D0%A4%D0%BE%D1%80%D0%BC%D1%83%D0%BB%D0%B0%20%D0%B2%D1%8B%D0%B3%D0%BB%D1%8F%D0%B4%D0%B8%D1%82%20%D1%82%D0%B0%D0%BA%3A,%D0%B2%D0%BE%D0%B7%D1%80%D0%B0%D1%81%D1%82%20%D0%B2%20%D0%B3%D0%BE%D0%B4%D0%B0%D1%85)%20%E2%88%92%20161.
export class UserProgram {
  /** Идентификатор программы */
  id;

  /** Возраст пользователя указанного в программе */
  age;

  /** Дневная норма каллориев пользователя, ккал */
  goal;

  sex;

  physicalActivity;

  height;

  weight;

  ratioCarbohydrates;

  ratioFats;

  ratioProteins;

  isExcludeActivity;
  constructor(private initialData: UserProgramApiDataType) {
    const {
      age,
      goal,
      id,
      physicalActivity,
      sex,
      height,
      weight,
      ratioCarbohydrates,
      ratioFats,
      ratioProteins,
      isExcludeActivity,
    } = initialData;

    this.age = age;
    this.goal = goal;
    this.sex = sex;
    this.id = id;
    this.height = height;
    this.weight = weight;
    this.physicalActivity = physicalActivity;
    this.ratioCarbohydrates = ratioCarbohydrates;
    this.ratioFats = ratioFats;
    this.ratioProteins = ratioProteins;
    this.isExcludeActivity = isExcludeActivity;
    makeAutoObservable(this);
  }

  get caloriesNormPerDay() {
    const activityIndex = getActivityIndex(this.physicalActivity);
    let result = 0;
    if (this.sex === 'MALE') {
      // Для мужчин: 66,5 + (13,75 × вес в кг) + (5,003 × рост в см) - (6,775 × возраст в годах).
      result =
        66.5 + 13.75 * this.weight + 5.003 * this.height - 6.775 * this.age;
    } else {
      // Для женщин: 655,1 + (9,563 × вес в кг) + (1,85 × рост в см) - (4,676 × возраст в годах);
      result =
        655.1 + 9.563 * this.weight + 1.85 * this.height - 4.676 * this.age;
    }
    if (!this.isExcludeActivity) {
      result = result * activityIndex;
    }
    return Math.round(result);
  }

  get caloriesNormPerDayToString() {
    return [this.caloriesNormPerDay, translate.tryTranslate('ккал')]
      .join(' ')
      .trim();
  }

  get proteinsNormPerDay() {
    return Math.round((this.ratioProteins / 100) * this.caloriesNormPerDay);
  }

  get fatsNormPerDay() {
    return Math.round((this.ratioFats / 100) * this.caloriesNormPerDay);
  }

  get carbohydratesNormPerDay() {
    return Math.round(
      (this.ratioCarbohydrates / 100) * this.caloriesNormPerDay
    );
  }

  get proteinsNormPerDayToString() {
    return [this.proteinsNormPerDay, translate.tryTranslate('ккал')]
      .join(' ')
      .trim();
  }

  get fatsNormPerDayToString() {
    return [this.fatsNormPerDay, translate.tryTranslate('ккал')]
      .join(' ')
      .trim();
  }

  get carbohydratesNormPerDayToString() {
    return [this.carbohydratesNormPerDay, translate.tryTranslate('ккал')]
      .join(' ')
      .trim();
  }
}
