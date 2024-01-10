function setCookie(cookieName, cookieValue) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 30 * 60 * 1000); // 30 minutes in milliseconds
    const cookieString = `${encodeURIComponent(cookieName)}=${encodeURIComponent(cookieValue)};expires=${expirationDate.toUTCString()};path=/`;
    document.cookie = cookieString;
  }

  function getCookie(cookieName) {
    const name = `${encodeURIComponent(cookieName)}=`;
    const cookies = document.cookie.split(';');
  
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(name) === 0) {
        return decodeURIComponent(cookie.substring(name.length, cookie.length));
      }
    }
    return null; // Return null if the cookie is not found
  }
  function deleteCookie(cookieName) {
    // Set the expiration date to a past time
    const expirationDate = new Date(0);
  
    // Format the cookie string with an expired date
    const cookieString = `${encodeURIComponent(cookieName)}=;expires=${expirationDate.toUTCString()};path=/`;
  
    // Set the cookie to delete it
    document.cookie = cookieString;
  }
  

  module.exports={setCookie,getCookie,deleteCookie}