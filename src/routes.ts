import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';


export function createCourse(request: Request,response: Response){
    CreateCourseService.execute({
        name: "NojeJS",
        educator: "Alan",
        duration: 10
    });

    return response.send();
}