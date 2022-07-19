import { backgroundColors } from "./constants";

export const getRandomColor =(max:number):string =>{
	const randomIndex = Math.floor(Math.random() * max);
	return backgroundColors[randomIndex]?.color;
}