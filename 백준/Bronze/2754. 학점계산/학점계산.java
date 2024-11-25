import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String grade = br.readLine();

        System.out.println(getScore(grade));
    }

    public static String getScore(String grade) {
        if (grade.equals("A+")) return "4.3";
        if (grade.equals("A0")) return "4.0";
        if (grade.equals("A-")) return "3.7";
        if (grade.equals("B+")) return "3.3";
        if (grade.equals("B0")) return "3.0";
        if (grade.equals("B-")) return "2.7";
        if (grade.equals("C+")) return "2.3";
        if (grade.equals("C0")) return "2.0";
        if (grade.equals("C-")) return "1.7";
        if (grade.equals("D+")) return "1.3";
        if (grade.equals("D0")) return "1.0";
        if (grade.equals("D-")) return "0.7";
        return "0.0";
    }
}