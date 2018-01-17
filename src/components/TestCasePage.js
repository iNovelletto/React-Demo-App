import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextFieldCustom from './common/TextFieldCustom';
import Typography from 'material-ui/Typography';
import DroppableTarget from './DroppableTarget';

//'default', 'inherit', 'primary', 'accent', 'contrast'
class TestCasePage extends React.Component {
  constructor(props) {
    super(props);

    this.onCompleteDrag = this.onCompleteDrag.bind(this);
    this.onTargetHover = this.onTargetHover.bind(this);
    this.onCompleteInvalidDrag = this.onCompleteInvalidDrag.bind(this);
    this.onDraggableItemDelete = this.onDraggableItemDelete.bind(this);

    //this will come from props but needs identifier to be set
    let artifacts = [
			{ id: 1, text: 'Banana'},
			{ id: 2, text: 'Avocado' },
			{ id: 3, text: 'Pineapple' }
    ];
    //this will come from props but needs identifier to be set
    let draggedArtifacts = [
			{ id: 4, text: 'Apple' },
			{ id: 5, text: 'Orange' },
			{ id: 6, text: 'Blueberry' }
    ];
    let identifier = 0;

    for(let i = 0; i < artifacts.length; i++){
      artifacts[i] = Object.assign({}, artifacts[i], { identifier: identifier++ });
    }
    for(let i = 0; i < draggedArtifacts.length; i++){
      draggedArtifacts[i] = Object.assign({}, draggedArtifacts[i], { identifier: identifier++ });
    }

    this.state = { artifacts, draggedArtifacts, identifier };
  }

  handleChange = () => {
  };

  onDraggableItemDelete(item) {
    let itemIndex = this.state.draggedArtifacts.indexOf(item);

    this.setState({ draggedArtifacts:
      [...this.state.draggedArtifacts.slice(0, itemIndex),
        ...this.state.draggedArtifacts.slice(itemIndex + 1)] });
  }

  onCompleteInvalidDrag() {
    this.setState({ draggedArtifacts: this.state.draggedArtifacts.filter(item => !item.isDrag)});
  }

  onCompleteDrag() {
    let addedItemIndex = this.state.draggedArtifacts.findIndex(item => item.isDrag);
    if(addedItemIndex === -1)
      return;

    this.setState({ draggedArtifacts:
      [...this.state.draggedArtifacts.slice(0, addedItemIndex),
        Object.assign({}, this.state.draggedArtifacts[addedItemIndex], { isDrag: false }),
        ...this.state.draggedArtifacts.slice(addedItemIndex + 1)] });
	}

	onTargetHover(dragIndex, hoverIndex, artifact, isFromDiffSource) {
    dragIndex = this.state.draggedArtifacts.findIndex(item => {
      return isFromDiffSource ? item.isDrag : item === artifact;
    });

    if(dragIndex == hoverIndex)
      return;

    if(isFromDiffSource && dragIndex === -1){
      this.setState({ draggedArtifacts:
        [...this.state.draggedArtifacts.slice(0, hoverIndex),
          Object.assign({}, artifact, { isDrag: true, identifier: this.state.identifier }),
          ...this.state.draggedArtifacts.slice(hoverIndex)], identifier: this.state.identifier + 1 });
    }
    else
      this.setState({ draggedArtifacts:
        this.state.draggedArtifacts.map((item, index) => index === dragIndex
          ? this.state.draggedArtifacts[hoverIndex]
          : index === hoverIndex
          ? this.state.draggedArtifacts[dragIndex]
          : item) });
	}

  render () {
    return (
      <Grid container component={Paper}>
        <Grid item xs={12}>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <TextFieldCustom
                id={'ProductId'}
                label={'Product'}
                //value={this.value1}
                onChange={this.handleChange}
                fullWidth={true}
              />
            </Grid>
            <Grid item>
              <Button color={'primary'} raised>
                {'New Product'}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <TextFieldCustom
                id={'TestCaseNameId'}
                label={'Test Case Name'}
                //value={this.value1}
                fullWidth={true}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextFieldCustom
                id={'TestCaseIdentifierId'}
                label={'Test Case Identifier'}
                //value={this.value1}
                fullWidth={true}
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <TextFieldCustom
                id={'ModuleId'}
                label={'Module'}
                //value={this.value1}
                fullWidth={true}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <Button color={'primary'} raised>
                {'New Module'}
              </Button>
            </Grid>
          </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="flex-start" alignItems="stretch">
          <Grid item xs={12}>
            <Typography type="title">
                  Artifacts
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <DroppableTarget
              id={1}
              artifacts={this.state.artifacts}
              onTargetHover={this.onTargetHover}
              onCompleteDrag={this.onCompleteDrag}
              onCompleteInvalidDrag={this.onCompleteInvalidDrag}
              droppable={false}
              width={200}/>
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              <Grid item>
                <DroppableTarget
                  id={2}
                  artifacts={this.state.draggedArtifacts}
                  onTargetHover={this.onTargetHover}
                  onCompleteDrag={this.onCompleteDrag}
                  onCompleteInvalidDrag={this.onCompleteInvalidDrag}
                  onDraggableItemDelete={this.onDraggableItemDelete}
                  droppable={true}
                  width={500} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container alignItems="flex-end" alignContent="flex-end">
        <Grid item xs={9}/>
          <Grid item xs={3}>
            <Button color={'primary'} raised>
              {'Save'}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    );
  }
}

export default TestCasePage;
