interface SimpleJob {
    codingLanguage: string
    sourceControl: string
}

interface ComplicatedJob extends SimpleJob {     // type intersection
    hasManyMeeting: true
    reportsToBeCompleted: string[]
}
// here instead of writing properties again and again we can intersect the Type into another Type if the have common fields
// we can remove code duplication with this approach 


let complicatedJob: ComplicatedJob = {
    codingLanguage: 'Javascript',
    sourceControl: 'git',
    hasManyMeeting: true,
    reportsToBeCompleted:  ['hourly', 'daily', 'weekly']
}


// ------ implements the Type

interface MeetingHolder {
    meetingMaxLength: number
    holdMeetings: () => void
}

class ProjectManager implements MeetingHolder {
    meetingMaxLength = 60;
    holdMeetings = () => {
        console.log('just holding a meeting');
    }
}