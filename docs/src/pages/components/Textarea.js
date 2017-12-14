
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/Textarea/react.json'; import examples from '../../../../src/components/Textarea/example'; import readme from 'raw-loader!../../../../src/components/Textarea/README.md'; import sassExamples from '../../../../data/components/Textarea/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class TextareaComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default TextareaComponent
