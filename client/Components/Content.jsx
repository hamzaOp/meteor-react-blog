const {
  CircularProgress
} = mui;

Content = React.createClass({

  render() {

      if(this.props.loading){
        let progress = {
        marginLeft : "45%",
        marginRight : "45%",
        marginTop : "10%",
        marginBottom : "30%"
      };
        return (<div><Pager callbacks={this.props.callbacks} counter={this.props.counter} /><CircularProgress color={"#DE4F4F"} size={1} style={progress} /></div>);
      }
      let posts = this.props.posts.map((post) => {
        return <Post key={post._id} id={post._id} author={post.author} title={post.title} subTitle={post.subTitle} postText={post.postText} date={String(post.date)} />;
      });

        return (<div><Pager callbacks={this.props.callbacks} counter={this.props.counter} />{posts}</div>);

}})
