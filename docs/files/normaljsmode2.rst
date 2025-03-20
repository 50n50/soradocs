Normal Javascript mode2
======================

For more examples see the `Modules Repo <https://github.com/50n50/sources>`_.

In the normal Javascript mode Sora will scrape the HTML of a link and provide it to the function.
You are then required to scrape the necessary detail from the HTML and rewrite it into the following specified JSON format.

Example
-------

.. code-block:: json

    {
        "test": "test"
    }

Functions
=========

.. raw:: html

    <div class="tabs">
      <ul class="tab-titles">
        <li class="active" onclick="switchTab(1)">Function 1</li>
        <li onclick="switchTab(2)">Function 2</li>
        <li onclick="switchTab(3)">Function 3</li>
        <li onclick="switchTab(4)">Function 4</li>
      </ul>
      <div class="tab-content">
        <div class="tab-1 active">
          <pre>
.. code-block:: python

    def function_1():
        \"\"\"This is function 1.\"\"\"
        print("Hello from Function 1!")
          </pre>
        </div>
        <div class="tab-2">
          <pre>
.. code-block:: python

    def function_2():
        \"\"\"This is function 2.\"\"\"
        print("Hello from Function 2!")
          </pre>
        </div>
        <div class="tab-3">
          <pre>
.. code-block:: python

    def function_3():
        \"\"\"This is function 3.\"\"\"
        print("Hello from Function 3!")
          </pre>
        </div>
        <div class="tab-4">
          <pre>
.. code-block:: python

    def function_4():
        \"\"\"This is function 4.\"\"\"
        print("Hello from Function 4!")
          </pre>
        </div>
      </div>
    </div>

    <script>
      function switchTab(tabIndex) {
        const tabs = document.querySelectorAll('.tab-titles li');
        const contents = document.querySelectorAll('.tab-content > div');

        tabs.forEach((tab, index) => {
          tab.classList.remove('active');
          contents[index].classList.remove('active');
          if (index === tabIndex - 1) {
            tab.classList.add('active');
            contents[index].classList.add('active');
          }
        });
      }
    </script>

    <style>
      .tabs .tab-titles {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .tabs .tab-titles li {
        padding: 10px;
        cursor: pointer;
      }

      .tabs .tab-titles .active {
        font-weight: bold;
      }

      .tabs .tab-content > div {
        display: none;
      }

      .tabs .tab-content .active {
        display: block;
      }
    </style>
