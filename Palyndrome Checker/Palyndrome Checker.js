function palindrome(str) {
    let onlyLetters = str.replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    onlyLetters = onlyLetters.toLowerCase().split("");
    for (let i = 0; i < onlyLetters.length - 1 / 2; i++) {
      if (onlyLetters[i] !== onlyLetters[onlyLetters.length - i - 1]) {
      return false;
      break;
    }
  }
  return true;
}


palindrome("eye");

palindrome("_eye")

palindrome("race car")

palindrome("not a palindrome")

palindrome("A man, a plan, a canal. Panama")

palindrome("never odd or even")

palindrome("nope")

palindrome("almostomla")

palindrome("My age is 0, 0 si ega ym.")

palindrome("1 eye for of 1 eye.")

palindrome("0_0 (: /-\ :) 0-0")

palindrome("five|\_/|four")
