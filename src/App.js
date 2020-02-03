import React from 'react';
import './App.css';
import Title from './components/title';
import Dog from './components/image';
import Text from './components/text/text';
import Button from './components/text/button';


let text = "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam aliquet nunc velit, et mattis dui aliquet ut. Integer placerat laoreet lorem, a commodo neque scelerisque nec. Suspendisse nec suscipit libero. Sed gravida nisi sit amet purus tristique auctor. Nam semper urna ac tortor fermentum, in varius justo bibendum. Quisque id est non mi pretium ultricies. In ultrices id dolor ut condimentum. Nulla ornare ultricies mi, in tincidunt ligula."

let button = "Submit";

let title = "Look at me, I know React";
let image = "https://www.hola.com/imagenes/estar-bien/20180521124316/border-collie-es-el-perro-mas-inteligente/0-568-93/bordercollie-t.jpg?filter=w600&filter=ds75";


function App(props) {

  return (
    <div className="App">
      <header className="title">
        <Title title={title} />
        <Dog image={image} />
        <Text text={text} />
        <Button button={button} />

      </header>
    </div>
  );
}

export default App;
