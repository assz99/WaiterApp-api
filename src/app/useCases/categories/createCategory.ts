import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function createCategories(req: Request,res: Response){
  try{
    const {icon,name} = req.body;

    if(!name){
      return res.status(400).json({
        error:'Name is Required',
      });
    }

    if(!icon){
      return res.status(400).json({
        error:'Icon is Required',
      });
    }

    const category = await Category.create({icon, name});

    res.status(201).json(category);
  }catch (error){
    console.log(error);
    res.status(500);
  }
}
