**Study List**
----
Get study list

* **URL**

  >/study


* **Method**

  > GET


* **URL Params**

  > Optional<br />
  >  * name=[String]
  >  * category=[Long]
  >  * leader=[Long]

* **Data Params**

  > None

* **Success Response**
    * **Code:** 200 <br />
      **Content:**
      ```json
      {
        "study" : [
        {
          "id" : Long,
          "name" : String,
          "level" : String,
          "location" : {"city": String, "gu": String},
          "type" : String,
          "status" :  String,
          "leader_id" : Long
        }, ...]
      }
      ```


* **Error Response**
    * **Code:** 404 NOT FOUND <br />


<br>

**Get Specific Study**
----
Get specific Study information

* **URL**

  >/study/:id


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
        "level" : String,
        "location" : {"city": String, "gu": String},
        "type" : String,
        "status" :  String,
        "leader_id" : Long,
        "text" : String
      }
      ```


* **Error Response**
    * **Code:** 404 NOT FOUND <br />