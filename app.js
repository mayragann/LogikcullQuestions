//Make a function that can be called for each different question
//To get all the possible concatenations of each array inputed
// push adds additional elements to end of array
// splice, change contents of array by removing or replacing  existing elements and/or adding new elements in place
//slice, returns a shallow copy of a portion of an array into a new array
const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let current = arr.slice();
        let next = current.splice(i, 1);
        permute(current.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};

const longesLetterLength = (arr) =>{
  var arr = arr.join("").split("");
  var last = null;
  var letterLength = 0;
  var result = {
    letter: null,
    length: 0,
  };
  for (var i = 0; i < arr.length; i++) {
    var letter = arr[i];
    if (letter != last) {
      if (letterLength > result.length) {
        result = {
          letter: last,
          length: letterLength,
        };
        letterLength = 1;
      }
    } else {
      letterLength++;
    }
    last = letter;
  }
  if (letterLength > result.length) {
    result = {
      letter: last,
      length: letterLength,
    };
  }
  return result;
}

const longestSubstring = (value) => {
  var result = {
    letter: null,
    length: 0,
  };

  var possibilites = permutator(value);
  possibilites.forEach((possibility) => {
    var sofar = longesLetterLength(possibility);

    if (sofar.length > result.length) {
      result = sofar;
    }
  });

  return result;
};

// 1. Given the words=["aabb", "aaaa", "bbab"], your function should return 6 and “a”. One of the
// best concatenations is words[1] + words[0] + words[2] = "aaaaaabbbbab".

// longestSubstring(["aabb", "aaaa", "bbab"]);
// {
// "letter": "a",
// "length": 6
// }
console.log(longestSubstring(["aabb", "aaaa", "bbab"]));

// 2. Given the words=["xxbxx", "xbx", "x"], your function should return 4 and “x”. One of the best
// concatenations is words[0] + words[2] + words[1] = "xxbxxxxbx".
// longestSubstring(["xxbxx", "xbx", "x"]);
// {
// "letter": "x",

// "length": 4
// }

console.log(longestSubstring(["xxbxx", "xbx", "x"]));
// 3. Given the words=["dd", "bb", "cc", "dd"], your function should return 4 and “d”. One of the best
// concatenations is words[0] + words[3] + words[1] + words[2] = "ddddbbcc".
// longestSubstring(["dd", "bb", "cc", "dd"]);
// {
// "letter": "d",
// "length": 4
// }
console.log(longestSubstring(["dd", "bb", "cc", "dd"]));
