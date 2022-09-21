import React, { useState, useEffect } from 'react';
import { Button, Input, Card, Space, Divider, Typography, Skeleton, Avatar } from 'antd';
import { HeartOutlined, EnvironmentOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

var CustomButton = function CustomButton(props) {
  var children = props.children,
      backgroundColor = props.backgroundColor,
      color = props.color,
      size = props.size,
      height = props.height,
      width = props.width,
      shape = props.shape,
      htmlType = props.htmlType,
      onClick = props.onClick,
      disabled = props.disabled;
  var antdDefaultProps = {};
  if (htmlType) antdDefaultProps = {
    htmlType: htmlType
  };
  var styles = {
    height: '',
    width: '',
    backgroundColor: '',
    color: ''
  };
  if (size) styles.size = size;
  if (color) styles.color = color;
  if (backgroundColor) styles.backgroundColor = backgroundColor;
  if (height) styles.height = height;
  if (width) styles.width = width;
  if (shape) styles.shape = shape;
  return React.createElement(Button, Object.assign({}, antdDefaultProps, {
    disabled: disabled,
    shape: shape,
    size: size,
    style: styles,
    onClick: onClick
  }), children);
};
CustomButton.displayName = 'CustomButton';
CustomButton.defaultProps = {
  children: 'hii joveo',
  size: 'middle',
  shape: 'default'
};

var SearchInput = function SearchInput(props) {
  var Search = Input.Search;

  var onSearch = function onSearch(value) {
    return console.log(value);
  };

  return React.createElement(Search, {
    placeholder: props.palceholder,
    onSearch: onSearch,
    enterButton: true
  });
};
SearchInput["default"] = {
  placeholder: 'Please Enter Text'
};

var ProductCard = function ProductCard(props) {
  var image = props.image,
      location = props.location,
      price = props.price,
      type = props.type;
  var Title = Typography.Title,
      Text = Typography.Text;

  var _useState = useState(false),
      like = _useState[0],
      setLike = _useState[1];

  return React.createElement(Card, {
    hoverable: true,
    style: {
      width: 300
    },
    cover: React.createElement("img", {
      alt: 'example',
      src: image
    })
  }, React.createElement(Space, null, React.createElement(Title, {
    level: 5
  }, type), React.createElement(Divider, {
    type: 'vertical',
    style: {
      backgroundColor: 'black',
      width: 2,
      top: -3
    }
  }), React.createElement(Title, {
    level: 5
  }, price, " / month")), React.createElement("br", null), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, React.createElement(Text, {
    keyboard: true
  }, location), like ? React.createElement("img", {
    src: 'https://img.icons8.com/emoji/452/red-heart.png',
    style: {
      height: '50px',
      width: '50px',
      position: 'relative',
      top: '21px',
      left: '21px'
    },
    onClick: function onClick() {
      setLike(false);
    }
  }) : React.createElement(HeartOutlined, {
    onClick: function onClick() {
      if (!like) setLike(true);
    },
    style: {
      fontSize: '50px',
      position: 'relative',
      top: '21px',
      left: '21px'
    }
  })));
};
ProductCard["default"] = {
  image: 'https://i0.wp.com/civillane.com/wp-content/uploads/2022/03/2BHK-Interior-Design-Cost-In-Pune.jpg?fit=900%2C615&ssl=1',
  type: '2 BHK',
  price: '2500 / month',
  location: 'Banglore'
};

var Meta = Card.Meta;
var LoadingCard = function LoadingCard(props) {
  var type = props.type,
      location = props.location,
      contactNo = props.contactNo,
      image = props.image,
      price = props.price,
      userName = props.userName;
  var Title = Typography.Title;

  var _useState = useState(true),
      loading = _useState[0],
      setLoading = _useState[1];

  useEffect(function () {
    setTimeout(function () {
      setLoading(false);
    }, 2000);
  }, []);
  return React.createElement(Card, {
    style: {
      width: 'fit-content',
      marginTop: 16
    }
  }, React.createElement(Skeleton, {
    loading: loading,
    avatar: true,
    active: true
  }, React.createElement(Meta, {
    avatar: React.createElement(Avatar, {
      src: image,
      style: {
        height: 100,
        width: 100
      }
    }),
    title: type,
    description: 'This is the description'
  }), React.createElement(Space, {
    style: {
      paddingTop: 12
    }
  }, React.createElement(Title, {
    level: 5
  }, type), React.createElement(Divider, {
    type: 'vertical',
    style: {
      backgroundColor: 'black',
      width: 2,
      top: -3
    }
  }), React.createElement(Title, {
    level: 5
  }, price, " / month")), React.createElement("br", null), React.createElement("div", {
    style: {
      gap: 2
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, React.createElement(EnvironmentOutlined, {
    style: {
      fontSize: '20px'
    }
  }), ' ', React.createElement(Title, {
    level: 5
  }, location)), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, React.createElement(UserOutlined, {
    style: {
      fontSize: '20px'
    }
  }), ' ', React.createElement(Title, {
    style: {
      color: 'green'
    },
    level: 5
  }, ' ', userName)), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, React.createElement(PhoneOutlined, {
    style: {
      fontSize: '20px'
    }
  }), ' ', React.createElement(Title, {
    level: 5
  }, ' ', React.createElement("a", {
    href: 'tel:123-456-7890'
  }, contactNo))))));
};
LoadingCard.defaultProps = {
  image: 'https://joeschmoe.io/api/v1/random',
  location: 'banglore',
  price: 2500,
  type: '2 BHK',
  contactNo: 964444,
  userName: 'shivam kawde'
};

export { CustomButton, LoadingCard, ProductCard, SearchInput };
//# sourceMappingURL=index.modern.js.map
