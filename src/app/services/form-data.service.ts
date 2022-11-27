import { Injectable } from '@angular/core'
import { FormData, IForm } from "../types"
import { Observable, tap } from "rxjs"
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  formData: FormData
  formId: string
  errorMessage: string

  constructor(private http: HttpClient) {
  }

  fetchData(formId: string): Observable<IForm> {
    return this.http.get<IForm>(`http://localhost:3000/forms/${formId}`)
      .pipe(
        tap((data) => {
          this.formData = data.data
          this.formId = data.id
        }),
      )
  }

  saveForm(): Observable<IForm> {
    return this.http.patch<IForm>(`http://localhost:3000/forms/${this.formId}`, {
      "id": this.formId,
      data: this.formData
    })
      .pipe(
        tap(data => {
          this.formData = data.data
        }),
      )
  }

}
