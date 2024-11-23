import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int[][] array = new int[Integer.parseInt(st.nextToken())][Integer.parseInt(st.nextToken())];

        for (int i = 0; i < array.length; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < array[0].length; j++) {
                array[i][j] += Integer.parseInt(st.nextToken());
            }
        }

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < array.length; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < array[0].length; j++) {
                int result = array[i][j] + Integer.parseInt(st.nextToken());
                sb.append(result).append(" ");
            }
            sb.append("\n");
        }
        System.out.println(sb.toString());
    }
}