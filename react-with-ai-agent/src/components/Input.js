import React from 'react';

// Inputコンポーネントはpropsとしてlabel, type, value, name, onChangeを受け取る
function Input({ label, type = 'text', value, name, onChange }) {
  return (
    <div>
      <label>
        {label}:
        <input
          type={type} // inputのタイプ (text, email, passwordなど)
          name={name} // inputのname属性 (親コンポーネントで識別するために使用)
          value={value} // inputの現在の値
          onChange={onChange} // 値が変更されたときのハンドラ
        />
      </label>
    </div>
  );
}

export default Input;