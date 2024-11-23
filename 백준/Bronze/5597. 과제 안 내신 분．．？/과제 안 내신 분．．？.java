import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int[] studentId = new int[30];
        for (int i = 0; i < 28; i++) {
            int num = Integer.parseInt(br.readLine());
            studentId[num - 1] = num;
        }

        for (int i = 0; i < 30; i++) {
            if (studentId[i] == 0) {
                System.out.println(i + 1);
            }
        }
    }
}