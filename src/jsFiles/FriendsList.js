import React  from 'react'
import ProfileCard from './ProfileCard';




function FriendsList() {


    return (
        <div>
            <div className="row">
                <div className="col-5 mx-auto">
                    <div className="row gy-4 mt-5">
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendsList;
