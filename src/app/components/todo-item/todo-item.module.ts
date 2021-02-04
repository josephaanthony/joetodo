import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TodoItemRoutingModule } from "./todo-item-routing.module";
import { TodoItemComponent } from "./todo-item.component";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      TodoItemRoutingModule
    ],
    declarations: [TodoItemComponent]
  })
  export class TodoItemModule {}