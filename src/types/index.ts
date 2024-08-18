/**
 * 定义一个接口
 * 用于限制Person对象的具体属性
 */
export interface PersonInter {
  id: string,
  name: string,
  age: number
}

/**
 * 用泛型自定义类型
 */

export type Persons = Array<PersonInter>
