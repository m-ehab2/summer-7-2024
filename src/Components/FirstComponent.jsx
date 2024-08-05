import React, { Component } from "react";

export default class FirstComponent extends Component {
  getFriendsCount(arrofFreinds) {
    if (arrofFreinds.length) {
      return arrofFreinds.map((name, index) => {
        return <li key={index}>{name}</li>;
      });
    } else {
      return <h3>You have no friends</h3>;
    }
  }
  render() {
    const name = "ahmed";
    const age = 16;
    const friends = ["john", "hamed"];
    return (
      <div>
        <div>{name}</div>
        <div>{age}</div>
        <ul>{this.getFriendsCount(friends)}</ul>
        <ul>
          {friends.length ? (
            friends.map((name, index) => {
              return <li key={index}>{name}</li>;
            })
          ) : (
            <h3>You have no friends</h3>
          )}
        </ul>
        <ul>
          {friends.length &&
            friends.map((name, index) => {
              return <li key={index}>{name}</li>;
            })}
        </ul>
      </div>
    );
  }
}
