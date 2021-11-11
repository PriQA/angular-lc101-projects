import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
   finishedChores = ['cook for party', 'clean the bathroom', 'go for interview', 'fold clothes','reply to emails', 'shopping'];

   targetImage = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fa2c2d00-d6b9-4650-a95d-100cc1451527/d90dle6-c8ed9db6-74c5-40e1-959e-29f429fa6e14.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9mYTJjMmQwMC1kNmI5LTQ2NTAtYTk1ZC0xMDBjYzE0NTE1MjcvZDkwZGxlNi1jOGVkOWRiNi03NGM1LTQwZTEtOTU5ZS0yOWY0MjlmYTZlMTQucG5nIn1dXX0.-zRbtM066PeQabxu7HliuOWuVNza9L-rtpY6Wn0PW9M';

   constructor() { }

   ngOnInit() {
   }

}
