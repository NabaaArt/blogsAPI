import React, { Component } from "react";
import axios from "axios";

class ScrollComponent extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false,
      page: 1,
      prevY: 1,
      totalPages: 0,
      total: 0
    };
  }

  getUsers(page) {
    this.setState({ loading: true });
    const endPoint = `https://reqres.in/api/users?page=${page}&per_page=3`;
    console.log("endPoint: ", endPoint);
    axios.get(endPoint).then((res) => {
      console.log(res);
      this.setState({
        users: [...this.state.users, ...res.data.data],
        page: res.data.page,
        totalPages: res.data.total_pages,
        total: res.data.total,
        loading: false
      });
    });
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      const curPage = this.state.page + 1;
      this.getUsers(curPage);
      this.setState({ page: curPage });
    }
    this.setState({ prevY: y });
  }

  componentDidMount() {
    this.getUsers(this.state.page);

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  render() {
    // Additional css
    const loadingCSS = {
      height: "100px",
      margin: "30px"
    };

    // To change the loading icon behavior
    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };

    return (
      <div className="container">
        <div style={{ minHeight: "800px" }}>
          {this.state.users.map((user) => (
            <div key={user.id}>
              <img src={user.avatar} height="100px" width="200px" />
              {user.first_name} {user.last_name}
            </div>
          ))}
        </div>
        <div
          ref={(loadingRef) => (this.loadingRef = loadingRef)}
          style={loadingCSS}
        >
          <span style={loadingTextCSS}>Loading...</span>
        </div>
      </div>
    );
  }
}

export default ScrollComponent;
