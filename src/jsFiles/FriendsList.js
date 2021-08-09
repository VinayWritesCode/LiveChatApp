import React  from 'react';
import User from './UserData';


function FriendsList() {

    return (
        <div>
            <div className="row">
                <div className="col-5 mx-auto">
                    <div className="row gy-4 mt-5">
                        <User />
                        <User />
                        <User />
                        <User />
                        <User />
                        <User />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendsList;
