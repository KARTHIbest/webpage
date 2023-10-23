<script>
          const box = document.getElementById('box');
      
          function createElement(elementType, inputType = null) {
            const newElement = document.createElement(elementType);
            if (inputType) {
              newElement.type = inputType;
            }
      
            if (elementType === 'input') {
              newElement.setAttribute('value', 'Placeholder');
            } else {
              newElement.innerHTML = 'New ' + elementType;
              newElement.title = 'Click to rename';
              newElement.addEventListener('click', () => {
                const newName = prompt('Enter a new name:', newElement.innerHTML);
                if (newName !== null) {
                  newElement.innerHTML = newName;
                }
              });
            }
      
            if (elementType === 'img') {
              newElement.alt = 'Image';
              newElement.title = 'Hover to set image source';
              newElement.addEventListener('click', () => {
                const newSrc = prompt('Enter the image source:');
                if (newSrc !== null) {
                  newElement.src = newSrc;
                }
              });
            }
      
            newElement.className = 'element';
            newElement.style.left = '0px';
            newElement.style.top = '0px';
      
            box.appendChild(newElement);
            makeElementDraggable(newElement);
          }
      
          function makeElementDraggable(element) {
            let isDragging = false;
      
            element.addEventListener('mousedown', (e) => {
              isDragging = true;
              element.style.zIndex = 1;
              const offsetX = e.clientX - element.getBoundingClientRect().left;
              const offsetY = e.clientY - element.getBoundingClientRect().top;
      
              document.addEventListener('mousemove', (e) => {
                if (isDragging) {
                  const x = e.clientX - offsetX - box.getBoundingClientRect().left;
                  const y = e.clientY - offsetY - box.getBoundingClientRect().top;
      
                  element.style.left = `${x}px`;
                  element.style.top = `${y}px`;
                }
              });
      
              document.addEventListener('mouseup', () => {
                isDragging = false;
                element.style.zIndex = 0;
              });
            });
          }
      
          // Add event listeners to buttons
          document.getElementById('labelBtn').addEventListener('click', () => createElement('label'));
          document.getElementById('buttonBtn').addEventListener('click', () => createElement('button'));
          document.getElementById('radioBtn').addEventListener('click', () => createElement('input', 'radio'));
          document.getElementById('dropdownBtn').addEventListener('click', () => createElement('select'));
          document.getElementById('linkBtn').addEventListener('click', () => createElement('a'));
          document.getElementById('textboxBtn').addEventListener('click', () => createElement('input', 'text'));
          document.getElementById('checkboxBtn').addEventListener('click', () => createElement('input', 'checkbox'));
          document.getElementById('imageBtn').addEventListener('click', () => createElement('img'));
          document.getElementById('tableBtn').addEventListener('click', () => createTable());
      
          function createTable() {
            const newTable = document.createElement('table');
            newTable.className = 'element';
            newTable.style.left = '0px';
            newTable.style.top = '0px';
      
            const newRow = document.createElement('tr');
            const cell1 = document.createElement('td');
            const cell2 = document.createElement('td');
      
            cell1.innerHTML = 'Row 1, Cell 1';
            cell2.innerHTML = 'Row 1, Cell 2';
      
            newRow.appendChild(cell1);
            newRow.appendChild(cell2);
      
            newTable.appendChild(newRow);
            box.appendChild(newTable);
            makeElementDraggable(newTable);
          }
        </script>