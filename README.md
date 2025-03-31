# Unit-Testing-Exercise

## 📝 Task
Write unit tests for the functions provided in `math.js` using Jest.

## 🚀 Setup
Follow these steps to set up the project on your local machine.

1. **Clone this repository:**
   ```sh
   git clone <repo-link>
2. **Navigate to the project folder:**
    ```sh
    cd Unit-Testing-Exercise
3. **Install dependencies:**
    ```sh
    npm install
4. **Run the existing tests:**
    ```sh
    npm test
## 🔥 Your Task
Complete the missing unit tests in **`math.test.js`** for:

✅ `subtract(a, b)`  
✅ `reverseString(str)`

## ✅ Example Test for `subtract()`
Here’s an example test that you need to add to **`math.test.js`**:

```javascript
test('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
});


