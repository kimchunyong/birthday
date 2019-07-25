import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Write extends Component {
    render() {
        return (
            <div className="mb-5" style={{
                lineHeight: '180%',
                fontSize: '18px'
            }}>
                <small>
                    <span className="text-middle" style={{ color: 'red' }}>
                        <FontAwesome name="heart" />
                    </span>
                </small><br />
                천슬부부가 만나 꼬물이를 가졌고,<br />
                어느새 그 아기가 지율이란 이름으로<br />
                세상과 마주한지 365일이 되었습니다.<br />

                지혜롭게 빛날 어여쁜 지율이의 첫 생일을<br />
                사랑과 축복을 담아 함께 축하해주세요.<br />
                <small>
                    <span className="text-middle" style={{ color: 'red' }}>
                        <FontAwesome name="heart" />
                    </span>
                </small>
            </div>
        );
    }
}

export default Write;