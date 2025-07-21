import React, { useState } from 'react';
import Input from './Input'; // 作成したInputコンポーネントをインポート

function UserForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Inputコンポーネントに渡すhandleChange関数は、
  // name属性を使ってどのinputが変更されたかを識別する
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('送信されたデータ:', formData);
    alert(`ユーザー名: ${formData.username}\nEmail: ${formData.email}\nパスワード: ${formData.password}`);
    // ここでAPIにデータを送信するなどの処理を行う
    // 例: postUserData(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Inputコンポーネントを再利用 */}
      <Input
        label="ユーザー名"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <Input
        label="メールアドレス"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        label="パスワード"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">登録</button>
    </form>
  );
}

export default UserForm;