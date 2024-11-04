import { MeatItem } from "./types";
import { v4 as uuidv4 } from 'uuid';
import ribeyeImage from "../assets/photos/beef.jpg";
import tboneImage from "../assets/photos/beefSteaks.jpg";
import chickenThighImage from "../assets/photos/chicken.jpg";
import chickenBreastImage from "../assets/photos/chickenFile.jpg";
import lambImage from "../assets/photos/lamb.jpg";
import liverImage from "../assets/photos/liver.jpg";
import mincedMeatImage from "../assets/photos/mincedMeat.jpg";
import beefShankImage from "../assets/photos/beefShank.jpg";
import porkChopsImage from "../assets/photos/porkChops.jpg";
import porkBellyImage from "../assets/photos/porkBelly.jpg";
import porkSchnitzelImage from "../assets/photos/pork.jpg";
import sausageImage from "../assets/photos/sausage.jpg";

export const meatItems: MeatItem[] = [
  {
    id: uuidv4(),
    name: "Ribeye steak",
    image: ribeyeImage,
    price: 45
  },
  {
    id: uuidv4(),
    name: "T-bone steak",
    image: tboneImage,
    price: 28
  },
  {
    id: uuidv4(),
    name: "Chicken thigh",
    image: chickenThighImage,
    price: 15
  },
  {
    id: uuidv4(),
    name: "Chicken breast",
    image: chickenBreastImage,
    price: 12
  },
  {
    id: uuidv4(),
    name: "Lamb steak",
    image: lambImage,
    price: 35
  },
  {
    id: uuidv4(),
    name: "Beef liver",
    image: liverImage,
    price: 10
  },
  {
    id: uuidv4(),
    name: "Mix minced meat",
    image: mincedMeatImage,
    price: 20
  },
  {
    id: uuidv4(),
    name: "Beef shank",
    image: beefShankImage,
    price: 25
  },
  {
    id: uuidv4(),
    name: "Pork chops",
    image: porkChopsImage,
    price: 18
  },
  {
    id: uuidv4(),
    name: "Pork belly",
    image: porkBellyImage,
    price: 15
  },
  {
    id: uuidv4(),
    name: "Pork schnitzel",
    image: porkSchnitzelImage,
    price: 20
  },
  {
    id: uuidv4(),
    name: "Grill sausage",
    image: sausageImage,
    price: 25
  }
];