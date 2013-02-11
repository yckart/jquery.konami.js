#Something about

Hmm, what should I say... not much! It is konami, read more on [wikipedia](http://en.wikipedia.org/wiki/Konami_Code).

#How to use

It is quite simple!

**1st** Include jQuery and the plugin:

    <script src='jquery.js'></script>
    <script src='jquery.konami.js'></script>

**2nd** Initialize the plugin with your callback function:

    $.konami(function() {
        // your function
    });

**3rd** Fire your konami (default: &#9650; &#9650; &#9660; &#9660; &#9664; &#9654; &#9664; &#9654; **b a**) and thus your konami!

#Custom Konami
You can define a custom konami code as an **array** as the second argument:

    $.konami(function() {
        // your function
    }, [75, 79, 78, 65, 77, 73]);

...and even as a **string**:

    $.konami(function() {
        // your function
    }, 'konami');

If you want to apply the konami effect only on a specific element, you can do that, of course:

    $('input').konami(function() {
        // your function
    }, 'konami');

#Example

Take a look at [http://yckart.github.com/jquery.konami.js/][1].

#Support

[@yckart][2] #konami

##License
Copyright (c) 2012 Yannick Albert ([http://yckart.com/][3])

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


  [1]: http://yckart.github.com/jquery.konami.js/
  [2]: http://twitter.com/yckart
  [3]: http://yckart.com
