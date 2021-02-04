import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { TodosComponent } from "./todos.component";

@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
    declarations: [TodosComponent, TodoItemComponent],
    exports: [TodosComponent]
})
export class TodosModule {}