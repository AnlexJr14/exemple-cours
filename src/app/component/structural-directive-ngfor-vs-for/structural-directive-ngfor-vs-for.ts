import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive-ngfor-vs-for',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive-ngfor-vs-for.html',
  styleUrls: ['./structural-directive-ngfor-vs-for.css'],
})

export class StructuralDirectiveNgforVsFor {
employees: any[] = [{
id: 1,
empName: 'John Doe',
empEmail: 'john.doe@example.com',
empPosition: 'Software Engineer',
empDepartment: 'Development',
},
{
  id: 2,
  empName: 'Jane Doe',
  empEmail: 'jane.doe@example.com',
  empPosition: 'Software Tester',
  empDepartment: 'Development',
  },
  {
    id: 3,
    empName: 'Jim Beam',
    empEmail: 'jim.beam@example.com',
    empPosition: 'Software Developer',
    empDepartment: 'Development',
  }
];

companyList: string[] = ['Google', 'Microsoft', 'Apple', 'Amazon', 'Facebook'];

}