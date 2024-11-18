import java.util.Scanner;

public class Main{
    public static void main(String args[]){
        Scanner scan = new Scanner(System.in);
        int x = scan.nextInt();
        int y = scan.nextInt();

        if (validate(x) && validate(y)) {
            System.out.println(getQuadrant(x, y));
        }

    }

    public static boolean validate(int number) {
        return number >= -1000 && number <= 1000;
    }

    public static int getQuadrant(int x, int y) {
        if (x < 0) {
            return y > 0 ? 2 : 3;
        }
        return y > 0 ? 1 : 4;
    }
}