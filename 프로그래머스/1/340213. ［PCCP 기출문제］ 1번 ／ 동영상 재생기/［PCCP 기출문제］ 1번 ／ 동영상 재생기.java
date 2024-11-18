class Solution {
    private final int SKIP_TIME = 10;
    private int videoLength;
    private int opStart;
    private int opEnd;
    
    public String solution(String video_len, String pos, String op_start, String op_end, String[] commands) {
        this.videoLength = convertToSeconds(video_len);
        this.opStart = convertToSeconds(op_start);
        this.opEnd = convertToSeconds(op_end);
        
        int currentPos = convertToSeconds(pos);
        if (isOpeningTime(currentPos)) {
            currentPos = opEnd;
        }
        
        for (String command : commands) {
            currentPos = executeCommand(command, currentPos);
            if (isOpeningTime(currentPos)) {
                currentPos = opEnd;
            }
        }

        return timeFormat(currentPos);
    }
    
    private int executeCommand(String command, int currentPos) {
        switch (command) {
            case "prev" :
                return Math.max(0, currentPos - SKIP_TIME);
            case "next" :
                return Math.min(videoLength, currentPos + SKIP_TIME);
            default :
                return currentPos;
        }
    }
    
    private String timeFormat(int time) {
        int mm = time / 60;
        int ss = time % 60;
        return (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
    }
    
    private boolean isOpeningTime(int currentPos) {
        return currentPos >= opStart && currentPos <= opEnd;
    }
    
    private int convertToSeconds(String time) {
        String[] arr = time.split(":");
        return Integer.parseInt(arr[0]) * 60 + Integer.parseInt(arr[1]);
    }
}