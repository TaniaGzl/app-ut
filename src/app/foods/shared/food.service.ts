import { Injectable } from '@angular/core';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  menu:Food[] = [
    {
      id: 1,
      name: 'Tacos',
      description: 'Pastor',
      category: 'food',
      image:
        'https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg',
      price: 60,
    },
    {
      id: 2,
      name: 'Horchata',
      description: 'Agua Fresca',
      category: 'drink',
      image:
        'https://cdn0.recetasgratis.net/es/posts/5/7/3/agua_de_horchata_74375_orig.jpg',
      price: 25,
    },
    {
      id: 3,
      name: 'Pozole',
      description: 'Cerdo',
      category: 'food',
      image:
        'https://phantom-marca-us.unidadeditorial.es/38cc156b436b56320c082691810ca038/resize/828/f/jpg/assets/multimedia/imagenes/2022/09/16/16632876379191.jpg',
      price: 55,
    },
    {
      id: 4,
      name: 'Tamarindo',
      description: 'Agua Fresca',
      category: 'drink',
      image:
        'https://cdn0.recetasgratis.net/es/posts/5/6/5/agua_de_tamarindo_74565_orig.jpg',
      price: 25,
    },
    {
      id: 5,
      name: 'Salbutes',
      description: 'Pollo',
      category: 'food',
      image:
        'https://www.saborearte.com.mx/wp-content/uploads/2021/03/Salbutes-portada-1.jpg',
      price: 30,
    },
    {
      id: 6,
      name: 'Jamaica',
      description: 'Agua Fresca',
      category: 'drink',
      image:
        'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/09/13/como-preparar-el-agua-de-jamaica-la-nueva-y-saciante-infusion-para-reducir-el-hinchazon-abdominal-1.jpeg',
      price: 25,
    },
    {
      id: 7,
      name: 'Empanadas',
      description: 'Carne Molida',
      category: 'food',
      image:
        'https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/91990b510362fdc32d64ed0a56d5bd4a.jpg',
      price: 25,
    },
    {
      id: 8,
      name: 'Chaya con Piña',
      description: 'Agua Fresca',
      category: 'drink',
      image:
        'https://i.ytimg.com/vi/gU_2E3TRZx0/maxresdefault.jpg',
      price: 25,
    },
  ]

  constructor() { }

  public getAllFoods():Food[] {
      return this.menu;
  }
}
