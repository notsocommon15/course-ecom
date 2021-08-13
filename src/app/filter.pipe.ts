import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchCourse: string) {
    if (value.length === 0 || searchCourse === "")
      {
      return value;
    }
    const courses = [];
    for (const course of value) {
      if (course.title.toLocaleLowerCase() === searchCourse.toLocaleLowerCase() || course.course_creator.toLocaleLowerCase() === searchCourse.toLocaleLowerCase() || course.tags.indexOf(searchCourse) >= 0)
      {
        courses.push(course);
        }
    }
    return courses;
  }

}
