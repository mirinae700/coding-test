import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int testCount = Integer.parseInt(br.readLine());

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < testCount; i++) {
            char[] charArray = br.readLine().toCharArray();
            sb.append(charArray[0]).append(charArray[charArray.length - 1]).append("\n");
        }
        System.out.println(sb.toString().trim());
    }
}