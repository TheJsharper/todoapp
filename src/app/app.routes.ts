import { Routes } from '@angular/router';


export const routes:Routes=[
  {
    path:"todo",
    loadChildren: ()=> import('./todos/todos.module').then(m => m.TodosModule),

  },
  {
    path: "**",
    redirectTo: '/'
}
]

/*@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers,{ metaReducers}, ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})*/
