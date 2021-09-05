**Find Member**
----
Get specified Member's information

* **URL**

  >/members/{id}


* **Method**

  > GET


* **URL Params**

  > Required<br />
  >  * id=[Long]

* **Data Params**

  > None

* **Success Response**
    * **Code:** 200 <br />
      **Content:**
      ```json
      {
        "id" : Long,
        "name" : String,
        "nickname" : String,
        "location" : {"city": String, "gu": String},
        "level" : String,
        "testDate" :  date
      }
      ```


* **Error Response**
    * **Code:** 404 NOT FOUND <br />