/** 
 * micro-http Library
 * Library to make HTTP requests a breeze
 * 
 * @version 3.0.0
 * @author Alex Monteil
 * @license MIT
 * 
 **/

class MicroHTTP {
  //  GET request
  async get(url) {
     const response = await fetch(url);
     const resData = await response.json();
     return resData;
  }

  //  POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });

    const resData = response.json();
    return resData;
  }

  // PUT request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  // DELETE request 
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    });

    const resData = await 'Data deleted';
    return resData;
  }
 }