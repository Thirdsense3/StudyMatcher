**Sign in**
----
Save a new member's data at DB

* **URL**

    >/members/join
 
 
* **Method**
    
    > POST
  

* **URL Params**
  
    > None
  
* **Data Params**
  * **Context-Type:** application/json
  
  ```json
  {
      "name" : "",
      "email" : "",
      "password" : "",
      "location" : {"city" : "", "gu" : ""}
  }
   ```
  
* **Success Response**
    * **Code:** 200 <br />
        **Content:** `{"id": Long, "error" : null}` <br />
        **Content:** `{"id": null, "error" : "fail"}`
      

* **Error Response**
  * **Code:** 409 CONFLICT <br />
  **Content:** `{ "error" : "fail"}`
    
<br>

**Log in**
----
Log in

* **URL**

  >/members/login


* **Method**

  > POST


* **URL Params**

  > None

* **Data Params**
  * **Context-Type:** application/json

  ```json
  {
      "name" : "",
      "password" : ""
  }
   ```

* **Success Response**
  * **Code:** 200 <br />
    **Content:** `{"id": Long, "error" : null}` <br />
    **Content:** `{"id": null, "error" : wrong email or password}`


* **Error Response**
  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ "error" : "wrong email or password"}`


<br>

**Duplicate check**
----
Check duplicated email

* **URL**

  >/members/duplicate-check/:email


* **Method**

  > GET


* **URL Params**

  > Required<br />
  >  * email=[String]

* **Data Params**
  
  > None

* **Success Response**
  * **Code:** 200 <br />
    **Content:** `"possible email"` <br />
    **Content:** `"duplicated email"`


* **Error Response**
  * **Code:** 404 NOT FOUND <br />