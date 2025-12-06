import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] 
})
export class App {
  title1 = "PERSONAL INFORMATION";
  name = "LAVIN LEE AGUSTIN";
  age = 20;
  gender = 'Female';
  date_of_birth = "November 05, 2004";
  place_of_birth = "Nueva Vizcaya";
  contact_number = "09634669406";
  address = "22 fatima st. Aurora Hill <br> Baguio City";

  title2 = "EDUCATION";
  college = "August 2024 - Present <br> Bachelor of Science in Computer Science <br> University of Baguio <br> Baguio City";
  high_school = "June 2016 - July 2023 <br> Saint Catherine's School <br> Nueva Vizacaya";
  elementary = "June 2010 - July 2016 <br> Sto. Domingo Elementary School <br> Nueva Vicaya";

  title3 = "AWARDS AND RECOGNITION: ";
  second_runnerUp = "Variety Show (Cultural Dance) <br> History of Cordillera Event  <br> Univerity Hall <br> baguio City <br> May 04, 2024";
  with_honor = "Academic Distinction <br> Saint Catherine's School <br> June 2023";
  with_honor2 = "Academic Distinction <br> Saint Catherine's School <br> June 2022";

  title4 = "SKILLS AND TALENTS: ";
  talent = "- Architectural Drawings (making floor plans)";
}