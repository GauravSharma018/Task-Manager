# Task-Manager 📝

A clean, modern, and responsive to-do list application built with HTML, CSS, and vanilla JavaScript. This project allows users to add, complete, and delete tasks, with all data saved to the browser's local storage for persistence.


---

## ✨ Features

-   **Add Tasks**: Quickly add new tasks to your list by typing in the input field and clicking "Add" or pressing Enter.
-   **Mark as Complete**: Click on a task to toggle its completion status, visually striking it through.
-   **Delete Tasks**: Remove individual tasks with a single click on the "×" icon.
-   **Clear All**: A dedicated button to clear the entire list of tasks at once.
-   **Persistent Storage**: All tasks are automatically saved to the browser's `localStorage`, so your list is preserved even after closing the browser.
-   **Responsive Design**: A mobile-first design that looks great on any screen size.

---

## 🛠️ How It Works

This project is a great example of **DOM manipulation** and **browser storage** using vanilla JavaScript.

1.  **Adding a Task**: When a user types a task and clicks "Add" (or presses Enter), a JavaScript function dynamically creates a new `<li>` element. [cite_start]A `<span>` element for the delete button is also appended. [cite: 2]
2.  **Event Delegation**: A single event listener is attached to the parent `<ul>` container. [cite_start]This is an efficient way to handle clicks on any task or delete button within the list, rather than adding a listener to every single item. [cite: 2]
3.  [cite_start]**Completing a Task**: If a click event targets an `<li>` element, the `.checked` CSS class is toggled, which applies the line-through style. [cite: 1, 2]
4.  [cite_start]**Deleting a Task**: If a click event targets a `<span>` (the delete button), its parent `<li>` element is removed from the DOM. [cite: 1, 2]
5.  **Saving Data**: After any modification (add, complete, or delete), the `saveTasks()` function is called. [cite_start]It saves the entire `innerHTML` of the task list to the browser's `localStorage`. [cite: 2]
6.  [cite_start]**Loading Data**: When the page loads, the `loadTasks()` function retrieves the saved HTML from `localStorage` and populates the list, restoring the user's previous session. [cite: 2]

---

## 🚀 Setup and Installation

This is a front-end-only project and requires no special setup.

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/GauravSharma018/Task-Manager
    cd todo-list-app
    ```

2.  **Open in Browser**:
    Simply open the `index.html` file in your favorite web browser to run the application.

---

## 💻 Technologies Used

-   [cite_start]**HTML5**: For the structure and layout of the application. [cite: 3]
-   [cite_start]**CSS3**: For all styling, including the gradient background, layout, and task item design. [cite: 1]
-   [cite_start]**Vanilla JavaScript**: For all application logic, including DOM manipulation and interacting with the `localStorage` API. [cite: 2]

## 📄 License

This project is open-source and available under the **MIT License**. See the `LICENSE` file for more details.
