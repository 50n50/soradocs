# Available Javascript Methods

Due to the limitations of Swift's JavaScriptCore framework, certain JavaScript functions that are commonly available in Node.js are not compatible with Sora. JavaScriptCore is designed to run JavaScript code in a sandboxed environment, primarily for web-related tasks, and does not provide built-in support for many Node.js-specific features. We are actively working to add additional methods and will keep this documentation updated with new additions while exploring possible workarounds for these limitations.

## New available methods

---

### fetch("http://example.org")

Returns the fetched URL as a `String`

⚠️ **Important:** Do not use .json() or .text() methods as those will not work with this fetch! 
If you want to use these functions, than look at the fetchv2() documentation.

For .json(), instead use:
```javascript
const data = await JSON.parse(response);
```

For .text(), Instead assign the value directly:
```javascript
const data = await response;
```

Goes without saying that this applies to StreamAsync mode too. You shouldn't need these methods in normal mode but if you do, use the above mentioned way.

---

### fetchv2("http://example.org", headers)

This function is an improved version of fetch, designed to compensate for the lack of the JavaScriptCore framework in Swift. It returns a Promise with an enhanced response object that includes .text() and .json() methods for easier parsing.

#### Usage:

Parameters:

- `url (String)`: The URL to fetch.

- `headers (Object, optional)`: An object containing key-value pairs for HTTP headers.

#### Response Object:

The returned object contains:

- `.text()`: Returns a Promise that resolves to the response as a String.

- `.json()`: Returns a Promise that resolves to the response parsed as a JSON object.


```javascript
const response = await fetchv2("http://example.org");
const textData = await response.text(); // Retrieves text
const jsonData = await response.json(); // Parses JSON
```

---

### atob(base64String)

Decodes a Base64-encoded ASCII `string` back into a binary string.

#### Returns:
A String containing the decoded data.

#### Example Usage:
```javascript
const decoded = atob("SGVsbG8sIHdvcmxkIQ=="); 
console.log(decoded); // Outputs: "Hello, world!"
```

#### Error Handling`
Returns null if the input is not a valid Base64 string.

---

### btoa(string)

Encodes a given binary string into a Base64-encoded ASCII string.

#### Returns:
A `string` containing the Base64 representation of the input.

#### Example Usage:
```javascript
const encoded = btoa("Hello, world!"); 
console.log(encoded); // Outputs: "SGVsbG8sIHdvcmxkIQ=="
```

#### Error Handling`
Returns null if the input is not a valid Base64 string.

