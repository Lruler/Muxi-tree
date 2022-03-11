import React, { useState } from "react";
import { useNavigate } from "react-router";
import './request.css'

export default function Request() {
  const [yes, setYes] = useState(null);
  const nav = useNavigate()
  return (
    <div className="body-re">
      <div className={yes === 1 ? 't' : "center-re"}>
        {yes === 1 ? (<div className="gobtn" onClick={() => nav('/xie')}>开始</div>) : null}
        {yes === 1 ? (
             `
              这一次\n
              给自己一个机会\n
              3.12\n
              种下小树苗\n
              写下一点东西\n
              或是愿望\n
              或是期待\n
              或是天马行空的未来\n
              接下来\n
              交给我们\n
              在未来的某一个时刻\n
              由木犀来带给你这一刻的倚马万言/\n
              书短意长\n
              看这携带记忆而来的参天大树\n
              是成长而来的快乐\n`
        ) : (
          <>
            <div className="text-re">是否开启此次植树(书写)之旅?</div>
            <div className="xuanze">
              <div className="btn" onClick={() => setYes(1)}>
                  <p>是</p>
              </div>
              <div className="btn" onClick={() => nav('/')}><p>否</p></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
