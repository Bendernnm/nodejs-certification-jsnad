In Node.js, Buffer objects are used to represent binary data in the form of a sequence of bytes. Many Node.js APIs, for example streams and file system operations, support Buffers, as interactions with the operating system or other processes generally always happen in terms of binary data.

The Buffer class is a subclass of the Uint8Array class that is built into the JavaScript language. A number of additional methods are supported that cover additional use cases. Node.js APIs accept plain Uint8Arrays wherever Buffers are supported as well.

Instances of the Buffer class, and Uint8Arrays in general, are similar to arrays of integers from 0 to 255, but correspond to fixed-sized blocks of memory and cannot contain any other values. The size of a Buffer is established when it is created and cannot be changed.
