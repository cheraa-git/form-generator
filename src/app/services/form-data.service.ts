import { Injectable } from '@angular/core'
import { IForm } from "../types"
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"
import { CacheService } from "../cache/cache.service"
import { cachedRequest } from "../cache/cache.decorator"


@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(private http: HttpClient, private readonly cache: CacheService) {
  }


  @cachedRequest(function (this) {
    return this.cache
  })
  getForm(formId: string) {
    console.log('getForm')
    return this.http.get<IForm>(`http://localhost:3000/forms/${formId}`)
  }


  saveForm(form: IForm): Observable<IForm> {
    return this.http.patch<IForm>(`http://localhost:3000/forms/${form.id}`, {
      "id": form.id,
      data: form.data
    })

  }

}
