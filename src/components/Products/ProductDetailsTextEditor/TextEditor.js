import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./textEditor.css"

export default class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.isDataSaved !== this.props.isDataSaved) {
      this.setState({ editorState: EditorState.createEmpty() });
    }
  }

  render() {
    const { editorState } = this.state;

    return (
      <div style={{margin:"15px 0"}}>
        <Editor
          editorState={editorState}
          wrapperClassName="wrapper"
          editorClassName="textfield"
          toolbarClassName="toolbar"
          onEditorStateChange={this.onEditorStateChange}
          onChange={() => {
            this.props.setProductDetails({
              ...this.props.productDetails,
              productDescription: draftToHtml(
                convertToRaw(editorState.getCurrentContent())
              ),
            });
          }}
        />
      </div>
    );
  }
}
