import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';


export function createCourse(request: Request,response: Response){
    CreateCourseService.execute({
        name: "NojeJS",
        educator: "Alan"
    });

    return response.send();
}