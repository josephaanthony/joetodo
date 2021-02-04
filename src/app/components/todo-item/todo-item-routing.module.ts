import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TodoItemComponent } from "./todo-item.component";

const routes: Routes = [
    {
      path: '',
      component: TodoItemComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class TodoItemRoutingModule {}